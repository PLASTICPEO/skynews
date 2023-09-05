import { useEffect, useState } from "react";
import { emailSchema } from "../../../schema";
import { numberSchema } from "../../../schema";

export const useContact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    surname: "",
    mail: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email: string) => {
    try {
      return emailSchema.parse(email); // Use the email schema for validation
    } catch (error) {
      return false;
    }
  };

  const validateNumber = (number: string) => {
    try {
      return numberSchema.parse(number); // Use the email schema for validation
    } catch (error) {
      return false;
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setSuccess("");
    }, 4000);
    return () => clearTimeout(notificationTimer);
  }, [success]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newError = "";

    switch (true) {
      case contactForm.name.trim() === "" &&
        contactForm.surname.trim() === "" &&
        contactForm.mail.trim() === "" &&
        contactForm.number.trim() === "" &&
        contactForm.message.trim() === "":
        newError = "შეავსეთ ველები";
        break;
      case contactForm.name.trim() === "":
        newError = "შეიყვანეთ სახელი";
        break;
      case contactForm.surname.trim() === "":
        newError = "შეიყვანეთ გვარი";
        break;
      case contactForm.number.trim() === "":
        newError = "შეიყვანეთ ტელეფონი";
        break;
      case !validateNumber(contactForm.number):
        newError = "ნომერი არასწორია";
        break;
      case contactForm.mail.trim() === "":
        newError = "შეიყვანეთ მეილი";
        break;
      case !validateEmail(contactForm.mail):
        newError = "მეილი არასწორია";
        break;
      case contactForm.message.trim() === "":
        newError = "შეიყვანეთ შეტყობინება";
        break;

      default:
        break;
    }

    setError(newError);

    if (!newError) {
      // If there are no errors, reset the form and submit
      setContactForm({
        name: "",
        surname: "",
        mail: "",
        number: "",
        message: "",
      });
      setSuccess("ფორმა გაიგზავნა");
    }
  };

  return {
    success,
    contactForm,
    error,
    handleChange,
    handleSubmit,
  };
};
