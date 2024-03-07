'use client';
import React, {useEffect, useState} from 'react';
import {useActiveLinkOnScroll} from "@/hooks/useActiveLinkOnScroll";
import Image from "next/image";
import Technologies from "@/components/technologies";
import Link from "next/link";
import AnimatedTextRocket from "@/components/animated-text-rocket";
import AnimatedNameAlt from "@/components/animated-name-alt";
import AnimatedName from "@/components/animated-name";

const ProyectsSection = () => {
    const { activeLink, navigateTo } = useActiveLinkOnScroll(['inicio']);
    const [onHoverAvailable, setOnHoverAvailable] = useState(false);
    const [onHoverLinkedIn, setOnHoverLinkedIn] = useState(false);
    const [onHoverGitHub, setOnHoverGitHub] = useState(false);
    const [onHoverDiscord, setOnHoverDiscord] = useState(false);
    const [onHoverEmail, setOnHoverEmail] = useState(false);
    const [currentHover, setCurrentHover] = useState('');


    useEffect(() => {
        setOnHoverAvailable(false)
    }, []);

    useEffect(() => {
        if (onHoverLinkedIn) {
            setTimeout(() => {
                setOnHoverLinkedIn(false)
            }, 350)
        }

        if (onHoverGitHub) {
            setTimeout(() => {
                setOnHoverGitHub(false)
            }, 350)
        }

        if (onHoverDiscord) {
            setTimeout(() => {
                setOnHoverDiscord(false)
            }, 350)
        }

        if (onHoverEmail) {
            setTimeout(() => {
                setOnHoverEmail(false)
            }, 350)
        }

    }, [onHoverLinkedIn, onHoverGitHub, onHoverDiscord, onHoverEmail]);
    return (
        <>
            <header id="inicio" className={"md:container my-5 pt-32 sm:pt-36 w-full overflow-hidden min-h-screen z-20 select-none"}>
                <div className=" flex justify-center items-center mx-2 sm:mx-16">
                    <div className="hidden sm:block shadow-md shadow-[#c084fc] gradient-border p-1 "
                         style={{
                             float: 'left',
                             shapeOutside: 'circle(50%)',
                             borderRadius: '50%',
                             marginRight: '2rem',
                             overflow: 'hidden'
                         }}>
                            <Image
                                src="/owner.webp"
                                alt="Avatar"
                                width={200}
                                height={200}
                                className="w-[120px] md:w-[200px] h-[120px] md:h-[200px] rounded-full select-none"
                            />
                    </div>
                    <div className="">
                        <div className={"hidden sm:visible sm:block "}>

                            <h3
                                className="text-xl sm:text-lg font-semibold my-2 font-mono w-full flex justify-between items-center whitespace-nowrap"
                            >
                                <div className="flex items-center"
                                     onMouseEnter={() => setOnHoverAvailable(true)}
                                     onMouseLeave={() => setOnHoverAvailable(false)}
                                >
                                    <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
                                        <span
                                            className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] ${onHoverAvailable ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#FDE68A_50%,#c084fc_100%)] ' : 'bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#FDE68A_50%,#c084fc_100%)]'}`}
                                        />
                                        <Link href={"https://www.linkedin.com/in/franjimenez-dev/"} target={"_blank"}
                                              className={`inline-flex items-center justify-center w-full px-3 py-1 select-none text-sm ${onHoverAvailable ? 'text-[#FDE68A]' : 'text-white'} rounded-full bg-[#010206] cursor-pointer backdrop-blur-3xl whitespace-nowrap`}>
                                            Disponible para trabajar
                                        </Link>
                                    </span>
                                </div>
                                <div className={"flex justify-center"}>
                                    <div className={"ml-3 flex items-center"}>
                                        <Link href={"https://www.linkedin.com/in/franjimenez-dev/"}
                                              onMouseEnter={() => {
                                                  setCurrentHover('linkedin')
                                                  setOnHoverLinkedIn(true)
                                              }}
                                              onMouseLeave={() => setCurrentHover('')}
                                              className={`${(onHoverLinkedIn || currentHover === 'linkedin') && 'animate-glow-low-purple animate-tech-purple'}`}
                                              target={"_blank"}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                                                 className={"w-6 h-6"} fill={"currentColor"}>
                                                <path
                                                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className={"ml-3 flex items-center"}>
                                        <Link href={"https://github.com/franjimenez-dev"}
                                              onMouseEnter={() => {
                                                  setCurrentHover('github')
                                                  setOnHoverGitHub(true)
                                              }}
                                              onMouseLeave={() => setCurrentHover('')}
                                              className={`${(onHoverGitHub || currentHover === 'github') && 'animate-glow-low animate-tech'}`}
                                              target={"_blank"}>
                                            <svg viewBox="0 0 256 250" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                                 className={"w-6 h-6 "}>
                                                <path
                                                    d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className={"ml-3 flex items-center"}>
                                        <Link href={"https://discordapp.com/users/912350432389656616"}
                                              onMouseEnter={() => {
                                                  setCurrentHover('discord')
                                                  setOnHoverDiscord(true)
                                              }}
                                              onMouseLeave={() => setCurrentHover('')}
                                              className={`${(onHoverDiscord || currentHover === 'discord') && 'animate-glow-low-purple animate-tech-purple'}`}
                                              target={"_blank"}>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"
                                                 className={"w-6 h-6 "} fill={"currentColor"}>
                                                <g>
                                                    <path
                                                        d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className={"ml-3"}>
                                        <Link href={"mailto:franjimenez.dev@gmail.com"}
                                              onMouseEnter={() => {
                                                  setCurrentHover('email')
                                                  setOnHoverEmail(true)
                                              }}
                                              onMouseLeave={() => setCurrentHover('')}
                                              className={`${(onHoverEmail || currentHover === 'email') && 'animate-glow-low animate-tech'}`}
                                        >

                                            <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"
                                                 className={"w-7 h-7 hover:text-[#FDE68A]"}>
                                                <g strokeWidth="0"></g>
                                                <g strokeLinecap="round"
                                                   strokeLinejoin="round"></g>
                                                <g>
                                                    <path
                                                        d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </h3>

                            <AnimatedName/>
                            <AnimatedTextRocket/>
                            {/*<h2 className={`flex flex-shrink text-xl md:text-3xl lg:text-3xl xl:text-4xl my-2 font-semibold font-mono whitespace-nowrap`}> 🚀*/}
                            {/*    Desarrollador web*/}
                            {/*</h2>*/}
                        </div>
                        <div className={"visible sm:hidden flex justify-start items-center sm:flex-none"}>

                            <div className="mx-0 sm:mx-16 w-20 h-20 shadow-md shadow-[#c084fc] gradient-border p-0.5"
                                 style={{
                                     float: 'left',
                                     shapeOutside: 'circle(50%)',
                                     borderRadius: '50%',
                                     marginRight: '1rem',
                                     overflow: 'hidden'
                                 }}
                            >
                                <Image
                                    src="/owner.webp"
                                    alt="Avatar"
                                    width={75}
                                    height={75}
                                    className="rounded-full"
                                />
                            </div>
                            <div className={"visible sm:hidden"}>

                                <AnimatedName/>
                                <AnimatedTextRocket/>
                            </div>
                        </div>

                        <div className={"flex sm:hidden justify-between mt-3"}>

                            <div className={"flex justify-around items-center"}>
                                <div className={"flex items-center"}>
                                    <Link href={"https://www.linkedin.com/in/franjimenez-dev/"}
                                          onMouseEnter={() => {
                                              setCurrentHover('linkedin')
                                              setOnHoverLinkedIn(true)
                                          }}
                                          onMouseLeave={() => setCurrentHover('')}
                                          className={`${(onHoverLinkedIn || currentHover === 'linkedin') && 'animate-glow-low-purple animate-tech-purple'}`}
                                          target={"_blank"}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                                             className={"w-5 h-5"} fill={"currentColor"}>
                                            <path
                                                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={"ml-3 flex items-center"}>
                                    <Link href={"https://github.com/franjimenez-dev"}
                                          onMouseEnter={() => {
                                              setCurrentHover('github')
                                              setOnHoverGitHub(true)
                                          }}
                                          onMouseLeave={() => setCurrentHover('')}
                                          className={`${(onHoverGitHub || currentHover === 'github') && 'animate-glow-low animate-tech'}`}
                                          target={"_blank"}>
                                        <svg viewBox="0 0 256 250" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                             className={"w-5 h-5 "}>
                                            <path
                                                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div className={"ml-3 flex items-center"}>
                                    <Link href={"https://discordapp.com/users/912350432389656616"}
                                          onMouseEnter={() => {
                                              setCurrentHover('discord')
                                              setOnHoverDiscord(true)
                                          }}
                                          onMouseLeave={() => setCurrentHover('')}
                                          className={`${(onHoverDiscord || currentHover === 'discord') && 'animate-glow-low-purple animate-tech-purple'}`}
                                          target={"_blank"}>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"
                                             className={"w-5 h-5 "} fill={"currentColor"}>
                                            <g>
                                                <path
                                                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={"ml-3"}>
                                    <Link href={"mailto:franjimenez.dev@gmail.com"}
                                          onMouseEnter={() => {
                                              setCurrentHover('email')
                                              setOnHoverEmail(true)
                                          }}
                                          onMouseLeave={() => setCurrentHover('')}
                                          className={`${(onHoverEmail || currentHover === 'email') && 'animate-glow-low animate-tech'}`}
                                    >

                                        <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"
                                             className={"w-6 h-6 hover:text-[#FDE68A]"}>
                                            <g strokeWidth="0"></g>
                                            <g strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g>
                                                <path
                                                    d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                </div>

                            </div>
                            <div className="flex items-center"
                                 onMouseEnter={() => setOnHoverAvailable(true)}
                                 onMouseLeave={() => setOnHoverAvailable(false)}
                            >
                            <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
                                <span
                                    className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] ${onHoverAvailable ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#FDE68A_50%,#c084fc_100%)] ' : 'bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#FDE68A_50%,#c084fc_100%)]'}`}
                                />
                                <Link href={"https://www.linkedin.com/in/franjimenez-dev/"} target={"_blank"}
                                      className={`inline-flex items-center justify-center w-full px-3 py-1 select-none text-sm ${onHoverAvailable ? 'text-[#FDE68A]' : 'text-white'} rounded-full bg-[#010206] cursor-pointer backdrop-blur-3xl whitespace-nowrap`}>
                                    Disponible para trabajar
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-both"></div>

                </div>
                <Technologies navigation={navigateTo}/>
            </header>
        </>
    )
        ;
};

export default ProyectsSection;