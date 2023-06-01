"use client";
import { HomePageContainers } from "@/containers/home-page-container";
import { HomePageProvider } from "@/containers/home-page-container/useHomePage";
import React from "react";

function HomePage() {
  return (
    <HomePageProvider>
      <HomePageContainers />;
    </HomePageProvider>
  );
}

export default HomePage;
