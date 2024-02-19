"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { useSelector } from "react-redux";

export function TestOP() {
     const { name } = useSelector((store) => store.auth)
     return (
          <div className="flex flex-col overflow-hidden bg-[#fff3e3] w-full     px-[40px]">
               <ContainerScroll
               
                    users={users}
                    titleComponent={
                         <>
                              <h1 className="text-4xl font-semibold text-[#5d5e59] ">
                                   Let's Go {name}<br />
                                   <span className="text-4xl text-[#5d5e59] font-mono  md:text-[6rem] font-bold mt-1 leading-none">
                                        Top Blogs
                                   </span>
                              </h1>
                         </>
                    }
               />
          </div>
     );
}

export const users = [
     {
          name: "Manu Arora",
          designation: "Founder, Algochurn",
          image: "https://picsum.photos/id/10/300/300",
          badge: "Mentor",
     },
     
     {
          name: "James Wilson",
          designation: "DevOps Engineer, CloudNet",
          image: "https://picsum.photos/id/18/300/300",
          badge: "Something",
     },
     {
          name: "Patricia Moore",
          designation: "Marketing Manager, MarketGrowth",
          image: "https://picsum.photos/id/19/300/300",
          badge: "Mentor",
     },
     {
          name: "Richard Taylor",
          designation: "Frontend Developer, WebSolutions",
          image: "https://picsum.photos/id/20/300/300",
     },
     {
          name: "Linda Anderson",
          designation: "Backend Developer, ServerSecure",
          image: "https://picsum.photos/id/21/300/300",
     },
     {
          name: "William Thomas",
          designation: "Full Stack Developer, FullStack",
          image: "https://picsum.photos/id/22/300/300",
          badge: "Badger",
     },
     {
          name: "Elizabeth Jackson",
          designation: "Project Manager, ProManage",
          image: "https://picsum.photos/id/23/300/300",
          badge: "Mentor",
     },
     {
          name: "David White",
          designation: "Database Administrator, DataSafe",
          image: "https://picsum.photos/id/24/300/300",
          badge: "Advocate",
     },
     {
          name: "Jennifer Harris",
          designation: "Network Engineer, NetConnect",
          image: "https://picsum.photos/id/25/300/300",
     },
     {
          name: "Charles Clark",
          designation: "Security Analyst, SecureIT",
          image: "https://picsum.photos/id/26/300/300",
     },
     {
          name: "Susan Lewis",
          designation: "Systems Analyst, SysAnalyse",
          image: "https://picsum.photos/id/27/300/300",
     },
     {
          name: "Joseph Young",
          designation: "Mobile Developer, AppDev",
          image: "https://picsum.photos/id/28/300/300",
          badge: "Mentor",
     },
     {
          name: "Margaret Hall",
          designation: "Quality Assurance, BugFree",
          image: "https://picsum.photos/id/29/300/300",
          badge: "Developer",
     },
];