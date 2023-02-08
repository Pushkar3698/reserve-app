import React from "react";
import { Header } from "../../components/header/Header";
import { HomeCard } from "../../components/home-card/HomeCard";
import { HomeCustomers } from "../../components/home-customers/HomeCustomers";
import { SearchBus } from "../../components/Search-bus/SearchBus";

export const Home = () => {
  return (
    <>
      <Header />
      <SearchBus />
      <HomeCard />
      <HomeCustomers />
    </>
  );
};
