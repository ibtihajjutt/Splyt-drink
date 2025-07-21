import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firsttextSplit = new SplitText(".first-text-split", {
      type: "chars",
    });
    const secondtextSplit = new SplitText(".second-text-split", {
      type: "chars",
    });

    gsap.from(firsttextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
     duration: 1,
     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
     scrollTrigger: {
      trigger: ".flavor-text-scroll",
      start: "top 10%",
     }
    });

    gsap.from(secondtextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
        toggleActions: "play none none reverse",
      },
    });

  });



  return (
    <div className="general-title col-center h-full 2xl:gap32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-4 first-text-split">
        <h1>We Have 6</h1>
      </div>

      <div style={{
        clipPath: "polygon(0% 0%, 0% 3%, 0%  100%, 0% 100%)",
        scrollTrigger:{
          trigger: ".flavor-section",
          start: "top 10%",
          
        }
      }} className="flavor-text-scroll">
        <div className="bg-mid-brown pb-5 2xl:pt-8 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;