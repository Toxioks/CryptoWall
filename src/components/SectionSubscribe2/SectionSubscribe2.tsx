import React, {FC, useState} from "react";
import ButtonCircle from "components/Button/ButtonCircle";
import rightImg from "images/SVG-subcribe2.png";
import NcImage from "components/NcImage/NcImage";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../../configs/firebase-config";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [popUp, setPopUp] = useState("");
  const [display, setDisplay] = useState("block");

  const newsLetterCollectionRef = collection(db, "newsletter");

  const processNewsletter = async (e : any) => {
    e.preventDefault();

    await addDoc(newsLetterCollectionRef, {
      email,
      time: serverTimestamp()
    });

    e.target.reset();
    setDisplay("none");
    setPopUp("true");
    setTimeout(() => {setPopUp("");}, 3000);
  };
  return (
      <div
          className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ${className}`}
          data-nc-id="SectionSubscribe2"
      >
        <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
          <h2 className="font-semibold text-4xl">Join our newsletter 🔔</h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Never miss out on the latest Web3 news
        </span>
          <ul className="space-y-5 mt-10">
            <li className="flex items-center space-x-4">
              <Badge name="01" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get discounted membership to CryptoVerse
            </span>
            </li>
            <li className="flex items-center space-x-4">
              <Badge color="red" name="02" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium insights from our specialist team
            </span>
            </li>
          </ul>
          <form className="mt-10 relative max-w-sm" style={{ 'display': display}} onSubmit={processNewsletter}>
            <Input
                required
                aria-required
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonCircle
                type="submit"
                className="absolute transform top-1/2 -translate-y-1/2 right-1"
            >
              <i className="las la-arrow-right text-xl"></i>
            </ButtonCircle>
          </form>
          {/*TODO: STYLE FOLLOWING*/}
          {popUp && <div className="newsletter-pop-up" >Thank you for subscribing🎉</div>}
        </div>
        <div className="flex-grow">
          <NcImage src={rightImg} />
        </div>
      </div>
  );
};

export default SectionSubscribe2;
