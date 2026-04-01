"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formLink =
        "https://docs.google.com/forms/d/e/1FAIpQLSdSo_VV1iWgj9cImCoR7xCum1OXpJJ_ePJ7Ef2uu8361pYF4Q/formResponse";

      const fields: Record<string, string> = {
        "entry.2005620554": values.name,
        "entry.1045781291": values.email,
        "entry.1065046570": values.message,
        "entry.1166974658": values.social || "",
      };

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.name = "gform_iframe";
      document.body.appendChild(iframe);

      const formEl = document.createElement("form");
      formEl.method = "POST";
      formEl.action = formLink;
      formEl.target = "gform_iframe";

      Object.entries(fields).forEach(([key, val]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = val;
        formEl.appendChild(input);
      });

      document.body.appendChild(formEl);
      formEl.submit();

      setTimeout(() => {
        document.body.removeChild(formEl);
        document.body.removeChild(iframe);
      }, 2000);

      form.reset();

      storeModal.onOpen({
        title: "Thankyou!",
        description:
          "Your message has been received! I appreciate your contact and will get back to you shortly.",
        icon: Icons.successAnimated,
      });
    } catch (err) {
      console.log("Err!", err);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
