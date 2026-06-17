import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { eventsData } from "@/data/events";
import EventDetailClient from "@/components/EventDetailClient";

interface EventPageProps {
  params: {
    id: string;
  };
}

// Required for next export compatibility (pre-renders paths)
export function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

// Dynamically generate SEO metadata on the server side
export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = eventsData.find((e) => e.id === params.id);
  if (!event) {
    return {
      title: "Event Not Found | ACM",
    };
  }
  return {
    title: `${event.title} - Gallery | ACM Student Chapter`,
    description: event.shortDesc,
    openGraph: {
      title: event.title,
      description: event.shortDesc,
      images: [{ url: event.coverImage }],
    },
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = eventsData.find((e) => e.id === params.id);

  // If event is not found, render Next.js notFound component
  if (!event) {
    notFound();
  }

  // Render client component passing the pre-loaded server data
  return <EventDetailClient event={event} />;
}
