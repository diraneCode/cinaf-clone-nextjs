import React from "react";
import Link from "next/link";
import EpisodeNouveaute from "@/app/components/nouveautes/EpisodeNouveaute";
import Nouveautes from "@/app/components/nouveautes/Nouveautes";

type Props = {};

export default function Detail({}: Props) {
  return (
    <div className="h-screen text-white flex items-center justify-center">
      <div className="h-[75%] w-5/6">
        <div className="space-x-4 mb-5">
          <Link href='#'>Nouveautees</Link>
          <Link href='#' className="text-gray-300">Bientot</Link>
        </div>
        <div className="w-full h-full flex space-x-5">
          <Nouveautes />
          <EpisodeNouveaute />
        </div>
      </div>
    </div>
  );
}
