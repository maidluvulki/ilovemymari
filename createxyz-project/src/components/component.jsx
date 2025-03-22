"use client";
import React from "react";

function MainComponent({
  iconClass = "fa-regular fa-eye",
  color = "text-white",
  size = "text-3xl",
}) {
  return <i className={`${iconClass} ${color} ${size}`}></i>;
}

function StoryComponent() {
  return (
    <div>
      <MainComponent />
      <MainComponent
        iconClass="fa-solid fa-heart"
        color="text-red-500"
        size="text-4xl"
      />
      <MainComponent
        iconClass="fa-brands fa-twitter"
        color="text-blue-500"
        size="text-2xl"
      />
    </div>
  );
}

export default Component;