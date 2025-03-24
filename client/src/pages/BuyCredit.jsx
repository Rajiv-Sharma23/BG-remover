import { motion as Motion } from "motion/react"; 
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Basic ",
    price: "$10",
    credits:"100",
    description: "For individuals starting out",
    buttonText: "Buy now",
    color: "from-green-400 to-teal-500",
    textColor: "text-teal-800",
  },
  {
    title: "Enterprise",
    price: "$50",
    credits:"500",
    description: "For big companies",
    buttonText: "Get Started",
    popular: true,
    color: "from-blue-500 to-purple-600",
    textColor: "text-purple-900",
  },
  {
    title: "Enterprise",
    price: "$250",
    description: "For large organizations",
    credits:"5000",
    buttonText: "Get Started",
    color: "from-orange-400 to-red-500",
    textColor: "text-red-800",
  },
];

function Pricing() {
  return (
    <div className="min-h-svh bg-gradient-to-br from-indigo-100 via-pink-100 to-red-100 flex flex-col items-center py-12  px-4 mx-4 lg:mx-44 my-10 m-auto rounded-3xl shadow-2xl ">
      {/* Header */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2 p-2 ">
          Pricing That Pops!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2 font-medium">
          Pick a plan, make it yours!
        </p>
      </Motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl  w-xs md:w-3xl lg:w-4xl">
        {pricingPlans.map((plan, index) => (
          <Motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.08, rotate: 1, transition: { duration: 0.3 } }}
            className="relative"
          >
            <Card
              className={`w-full bg-gradient-to-br ${plan.color} text-white shadow-xl rounded-xl overflow-hidden`}
            >
              {plan.popular && (
                <span className="absolute top-2 right-2 bg-yellow-300 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Hot Pick
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{plan.title}</CardTitle>
                <p className="text-sm opacity-80">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-extrabold">
                  {plan.price}
                  <span className="text-xl opacity-70">/mo</span>
                </div>
                {/* <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm font-medium">
                      <span className="inline-block w-4 h-4 mr-2 bg-white rounded-full text-center text-xs text-black">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul> */}

                
                <div>
                  <h2 className="mt-4 text-lg"> Total credits = {plan.credits}</h2>
                </div>
                
                
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} text-white text-md border-none hover:opacity-90`}
                  asChild
                >
                  <Motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                    {plan.buttonText}
                  </Motion.button>
                </Button>
              </CardFooter>
            </Card>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;