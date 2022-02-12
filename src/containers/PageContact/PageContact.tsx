import React, {FC, useState} from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import LayoutPage from "components/LayoutPage/LayoutPage";
import SocialsList from "components/SocialsList/SocialsList";
import Textarea from "components/Textarea/Textarea";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";

import emailjs from '@emailjs/browser';
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../../configs/firebase-config";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "CryptoVerse HQ James Graham",
  },
  {
    title: "💌 EMAIL",
    desc: "Contact@CryptoVerse.com",
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUpMessage, setPopUpMessage] = useState("");

  const contactFormCollectionRef = collection(db, "contact-form");

  const processContactForm = async (e : any) => {
    e.preventDefault();

    await addDoc(contactFormCollectionRef, {
      name,
      email,
      message,
      time: serverTimestamp()
    });

    emailjs.sendForm('service_yklfd0i', 'template_kmllxcy', e.target, 'user_Y42cWwZi6lpaoh6FhJy9n')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset();
    setPopUpMessage("Your message has been sent.");
    setTimeout(() => {setPopUpMessage("");}, 3000);
  };

  return (
      <div className={`nc-PageContact ${className}`} data-nc-id="PageContact">
        <Helmet>
          <title>Contact | CryptoVerse</title>
        </Helmet>
        <LayoutPage
            subHeading="Drop us message and we will get back for you."
            headingEmoji=""
            heading="Contact us"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="max-w-sm space-y-6">
              {info.map((item, index) => (
                  <div key={index}>
                    <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                      {item.title}
                    </h3>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </span>
                  </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div className="border border-neutral-100 dark:border-neutral-700 lg:hidden"></div>
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={processContactForm}>
                <label className="block">
                  <Label>Full name</Label>

                  <Input placeholder="Example Doe" type="text" className="mt-1" name="name" onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                      type="email"
                      placeholder="example@example.com"
                      className="mt-1"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6}  name="message" onChange={(e) => setMessage(e.target.value)} required/>
                </label>
                <ButtonPrimary type="submit">Send Message</ButtonPrimary>
              </form>
              {/*TODO: STYLE FOLLOWING*/}
              {popUpMessage && <div className="contact-form-pop-up" style={{background: "indigo"}}>Your message has been sent.</div>}
            </div>
          </div>
        </LayoutPage>

        {/* OTHER SECTIONS */}
        <div className="container pb-16 lg:pb-28">
          <SectionSubscribe2 />
        </div>
      </div>
  );
};

export default PageContact;
