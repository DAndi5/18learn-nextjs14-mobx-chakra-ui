'use client'
import usersStore, {IUserModel,} from "@/app/components3/users/controller/usersStore";
import UsersIndex from "@/app/components3/users/ui";

// // import React, { useEffect, useState } from "react";
//
// type Props = {
//   params: {
//     id: string;
//   };
// };

async function AllUsers({users}: { users: IUserModel[] }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await res.json();

  console.log(users);
  usersStore.users = users;
  console.log(`usersStore.users =${usersStore.users[1].name}`);

  return (
    <>
      <a href="https://github.com/lifeofcode01/learn-next" target='_blank'> This is the same project from
        Github </a> and
      <a href="https://learn-next-js-alpha.vercel.app/users" target='_blank'> Demo </a>
      <UsersIndex/>
    </>
  );

// async function AllUsers({params: {id}}: Props) {
// const AllUsers = ({ users }: { users: IUserModel[] }) => {
// const UsersIndexPage = () => {

  // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // const users: IUserModel  = await res.json();
  // const users: data  = await res.json();

  // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();

  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   async function fetchProduct() {
  //     setLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //     const users: IUserModel  = await res.json();
  //
  //     // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     // const data = await res.json();
  //
  //     // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     // const data = await res.json();
  //     // const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     // const product: Product = await res.json();
  //     setProduct(product);
  //     // setLoading(false)
  //   }
  //   fetchProduct();
  // }, []);


};

export default AllUsers;
