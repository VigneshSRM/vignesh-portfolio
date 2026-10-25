import { enquiryCategories } from "@/config/portfolio";
export type ContactData = {
  name: string;
  email: string;
  company: string;
  category: string;
  message: string;
  website: string;
};
export function validateContact(data: ContactData) {
  const errors: Partial<Record<keyof ContactData, string>> = {};
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100)
    errors.name = "Please enter a name between 2 and 100 characters.";
  if (
    !data.email ||
    !/^\S+@\S+\.\S+$/.test(data.email) ||
    data.email.length > 254
  )
    errors.email = "Please enter a valid email address.";
  if (data.company.length > 150)
    errors.company = "Please use fewer than 150 characters.";
  if (!enquiryCategories.includes(data.category))
    errors.category = "Please choose an enquiry category.";
  if (
    !data.message ||
    data.message.trim().length < 20 ||
    data.message.length > 5000
  )
    errors.message = "Please describe your project in 20–5,000 characters.";
  return errors;
}
