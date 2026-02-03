import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check, User, Users, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  attendance: z.enum(["attending", "not-attending"], {
    required_error: "Please select your attendance",
  }),
  guests: z.string().optional(),
  message: z.string().max(500, "Message is too long").optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      attendance: undefined,
      guests: "1",
    },
  });

  const attendance = watch("attendance");

  const onSubmit = async (data: RSVPFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("RSVP submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "RSVP Received! 💌",
      description: "Thank you for letting us know. We look forward to seeing you!",
    });
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground">
            Please let us know if you can make it
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="py-12">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Check className="w-10 h-10 text-charcoal" />
                  </motion.div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your response has been recorded. We can't wait to celebrate with you!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center font-serif text-charcoal">
                    Will you join us?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 text-charcoal">
                        <User className="w-4 h-4 text-silver" />
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="rounded-xl border-input focus:border-sky-deep"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-charcoal">
                        <Send className="w-4 h-4 text-silver" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="rounded-xl border-input focus:border-sky-deep"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Attendance */}
                    <div className="space-y-3">
                      <Label className="text-charcoal">Will you attend?</Label>
                      <RadioGroup
                        value={attendance}
                        onValueChange={(value) => setValue("attendance", value as "attending" | "not-attending")}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="attending" id="attending" />
                          <Label htmlFor="attending" className="cursor-pointer text-charcoal">
                            Yes, I'll be there! 🎉
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="not-attending" id="not-attending" />
                          <Label htmlFor="not-attending" className="cursor-pointer text-charcoal">
                            Sorry, I can't make it 😢
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.attendance && (
                        <p className="text-sm text-destructive">{errors.attendance.message}</p>
                      )}
                    </div>

                    {/* Number of Guests */}
                    {attendance === "attending" && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Label htmlFor="guests" className="flex items-center gap-2 text-charcoal">
                          <Users className="w-4 h-4 text-silver" />
                          Number of Guests
                        </Label>
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          max="10"
                          placeholder="1"
                          className="rounded-xl border-input focus:border-sky-deep w-24"
                          {...register("guests")}
                        />
                      </motion.div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 text-charcoal">
                        <MessageSquare className="w-4 h-4 text-silver" />
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Any dietary restrictions or special messages..."
                        className="rounded-xl border-input focus:border-sky-deep min-h-[100px]"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-charcoal text-white hover:bg-charcoal/90 h-12"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          Send RSVP
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPForm;
