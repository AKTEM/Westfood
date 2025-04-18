import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Production Supervisor",
      location: "Main Factory",
      type: "Full-time",
      description: "Oversee daily production operations and team management in our food manufacturing facility.",
    },
    {
      title: "Quality Control Specialist",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Ensure product quality meets company standards and food safety regulations.",
    },
    {
      title: "Sales Representative",
      location: "Regional",
      type: "Full-time",
      description: "Drive business growth through product sales and client relationship management.",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting career opportunities at Westfood Company Limited. We're
            looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <Button asChild className="w-full">
                <Link href="/careers/apply">Apply Now</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see a position that matches your skills?
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}