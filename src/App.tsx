import React, { useState } from "react";
import { useQuery } from "react-query";

// components
import Item from "./Products";
import Cart from "./Cart/Cart";

// styles
import { Button, Container, StyledButton } from "./App.styles";
import { Grid, LinearProgress, Drawer, Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Header from "./Header";
// import { toast } from "react-toastify";


// types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: {count: number, rate: any;}
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  
  const [expand, setExpand] = useState(false);
  const dataDisplay = expand ? data : data?.slice(0, 5) ;

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item 
              );
        }
        return [...prev, { ...clickedItem, amount: 1 }];
    });
      }; 

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress sx={{
                  backgroundColor: '#bee1e5',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#479aa3'
                  }
                }} />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <Header title="Logo">
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            
          />
        </Drawer>
      </Header>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems) }  sx={{
      "& .MuiBadge-badge": {
        color: "#fff",
        backgroundColor: "#479aa3"
      }
    }} >
        <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {dataDisplay?.map((item) => (
            
            <Grid item xs={1} sm={4} md={4} key={item.id}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
          
        </Grid>
        
      </Container>
        
        <Button onClick={()=> setExpand(!expand)}> {expand ? 'Ver menos produtos' : 'ver todos os produtos'} </Button>
        
    </>
  );
};

export default App;
