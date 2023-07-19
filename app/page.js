"use client";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import img1 from "../public/assets/images/one.jpg";
import img2 from "../public/assets/images/two.jpg";
import img3 from "../public/assets/images/three.jpg";
export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex lg:flex-row flex-col h-screen w-screen relative overflow-hidden">
      <header className="absolute top-0 left-0 w-full  px-[20px] py-[14px] flex items-center justify-between z-[999]">
        <p className="text-white md:text-[32px] text-[26px]">Studio Status</p>
        <Hamburger
          duration={0.4}
          color="#fff"
          easing="ease-in-out"
          toggled={isOpen}
          toggle={setOpen}
        />
      </header>
      <div className="flex-[30%] bg-black h-full relative cursor-pointer group">
        <div className="flex flex-col gap-[20px] items-center justify-center text-center h-full  group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
          <p className="text-red-500 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[42px] lg:group-hover:opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-[.4s]">
            PREMIUM
          </p>
          <p className="text-red-500 xl:text-[64px] lg:text-[54px] md:text-[44px] text-[34px] text-[24px] group-hover:opacity-0 group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
            100 e
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <Image
            className="w-full h-full object-cover object-center opacity-0 group-hover:opacity-40 duration-[.5s] transition-all ease-in-out"
            src={img1}
            alt="trainer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="sm:w-[80%] w-full px-[16px] sm:px-0 text-center flex flex-col gap-[40px] items-center justify-center">
            <p className="xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100 text-red-400">
              Advanced training with expert trainers and a customized plan for
              achieving top-notch results. Access to premium equipment and group
              workouts. Comfortable space for relaxation and additional
              amenities such as nutritional guidelines and individual
              counseling.
            </p>
            <button className="absolute lg:relative bottom-[8px] right-[8px] rounded-[8px] md:px-[14px] md:py-[8px] px-[12px] py-[6px] hover:bg-white hover:border-red-500 bg-red-500 hover:text-red-500 border-2 md:text-[22px] sm:text-[20px] text-[18px] md:w-[150px] sm:w-[120px] w-[100px] hover:bg-transparent text-black border-black group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex-[30%] bg-red-500 h-full relative cursor-pointer group">
        <div className="flex flex-col gap-[20px] items-center justify-center text-center h-full  group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
          <p className="text-black xl:text-[80px] lg:text-[64px] md:text-[52px] text-[42px] lg:group-hover:opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-[.4s]">
            VIP
          </p>
          <p className="text-black xl:text-[64px] lg:text-[54px] md:text-[44px] text-[34px] text-[24px] group-hover:opacity-0 group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
            900 e
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <Image
            className="w-full h-full object-cover opacity-0 group-hover:opacity-40 duration-[.5s] transition-all ease-in-out"
            src={img2}
            alt="trainer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="sm:w-[80%] w-full px-[16px] sm:px-0 text-center flex flex-col gap-[40px] items-center justify-center">
            <p className="xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100 text-gray-900">
              Intensive training tailored to your goals with a personalized
              program and individual trainer. Exclusive access to top-notch
              equipment and group workouts. Luxurious relaxation space and
              wellness services. Perfect for ambitious enthusiasts seeking the
              highest level of support.
            </p>
            <button className="absolute lg:relative bottom-[8px] right-[8px] rounded-[8px] md:px-[14px] md:py-[8px] px-[12px] py-[6px] bg-black border-red-500 text-red-500 border-2 md:text-[22px] sm:text-[20px] text-[18px] md:w-[150px] sm:w-[120px] w-[100px] hover:bg-transparent hover:text-black border-black group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex-[30%] bg-black h-full relative cursor-pointer group">
        <div className="flex flex-col gap-[20px] items-center justify-center text-center h-full  group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
          <p className="text-red-500 xl:text-[80px] lg:text-[64px] md:text-[52px] text-[42px] lg:group-hover:opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-[.4s]">
            STANDARD
          </p>
          <p className="text-red-500 xl:text-[64px] lg:text-[54px] md:text-[44px] text-[34px] text-[24px] group-hover:opacity-0 group-hover:translate-y-[-20%] transform transition-all ease-in-out duration-[.4s]">
            70 e
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <Image
            className="w-full h-full object-cover opacity-0 group-hover:opacity-40 duration-[.5s] transition-all ease-in-out"
            src={img3}
            alt="trainer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="sm:w-[80%] w-full px-[16px] sm:px-0 text-center flex flex-col gap-[40px] items-center justify-center">
            <p className="xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100 text-red-400">
              Quality training with a team of experienced trainers and a program
              that suits your needs. Access to a well-equipped fitness center
              and group workouts. An affordable option for those looking to
              maintain fitness and improve health with expert guidance.
            </p>
            <button className="absolute lg:relative bottom-[8px] right-[8px] rounded-[8px] md:px-[14px] md:py-[8px] px-[12px] py-[6px] hover:bg-white hover:border-red-500 bg-red-500 hover:text-red-500 border-2 md:text-[22px] sm:text-[20px] text-[18px] md:w-[150px] sm:w-[120px] w-[100px] hover:bg-transparent text-black border-black group-hover:translate-y-0 translate-y-[20%] transition-all ease-in-out duration-[0.4s] opacity-0 group-hover:opacity-100">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
