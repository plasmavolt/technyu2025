"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  category: string;
  imageUrl: string;
  linkedinUrl?: string;
  slug: string;
};

const teamData: TeamMember[] = [
    { name: 'Alex Bard', title: 'Managing Director, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/de482d171a6c9c94ccd4b3a07713ecba5a6ee450-1179x2082.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/alexbard/', slug: 'alex-bard' },
    { name: 'Urvashi Barooah', title: 'Partner, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/f22b41804d5eda16557d583a3c303639062cd676-786x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/urvashi-barooah-7a0ba228/', slug: 'urvashi-barooah' },
    { name: 'Logan Bartlett', title: 'Managing Director, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/827811b17102325f93d31e4d8f4214cafd63f844-786x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/loganbartlett/', slug: 'logan-bartlett' },
    { name: 'Adil Bhatia', title: 'Vice President, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/c2c4183133a41a7fb2fdb11365a74da4d30e39ea-787x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/adil-bhatia-3a7b21139/', slug: 'adil-bhatia' },
    { name: 'Erica Brescia', title: 'Managing Director, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/74918b00510964e404eca9ee6148372d6c22fe17-1316x2330.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/ebrescia/', slug: 'erica-brescia' },
    { name: 'Patrick Chase', title: 'Managing Director, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/b32fb76d7fe8d0bf3014c48e6e198097b7a72121-787x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/patrickachase/', slug: 'patrick-chase' },
    { name: 'Meera Clark', title: 'Partner, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/26365ac5fd1d20d31f87a158770e262126a01c8b-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/meera-clark-95b38077/', slug: 'meera-clark' },
    { name: 'Lydia Day', title: 'Associate, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/54d97a3ede3426237ceb3d4cb109bca05a6ab635-3500x4658.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/lydia-day-03597a150/', slug: 'lydia-day'},
    { name: 'Satish Dharmaraj', title: 'Managing Director, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/90a1d42d48e3d6129a71ecc86baf832beb9adb28-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/in/satishdharmaraj', slug: 'satish-dharmaraj' },
    { name: 'Jacob Effron', title: 'Managing Director, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/ba27aafe503e64498000b1e8c1ffd7922024af89-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/jacobeffron/', slug: 'jacob-effron' },
    { name: 'Elliot Geidt', title: 'Managing Director, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/77a6b7ff2a2d657e981bae4e767c511fb5aa7417-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/pub/elliot-geidt/6/a80/528', slug: 'elliot-geidt' },
    { name: 'Annie Kadavy', title: 'Venture Partner, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/1120e05f3d42d63a8d196dc544b43ea14a0f52b3-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/anniekadavy/', slug: 'annie-kadavy' },
    { name: 'Scott Raney', title: 'Managing Director, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/808b113d7cc58c625dd668ca56dce01e87768726-783x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/in/sraney', slug: 'scott-raney' },
    { name: 'Matan Roet', title: 'Associate, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/b021d52526d25d55745ecba6e5d4e91e4449f2e8-3500x4658.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/matan-roet/', slug: 'matan-roet' },
    { name: 'Priscilla Russo', title: 'Associate, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/eb77bc40580a99a2ecc73f48100415264f2381c5-3500x4658.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/priscilla-russo/', slug: 'priscilla-russo' },
    { name: 'Jordan Segall', title: 'Partner, early', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/33a7477621ce322babc67c88391dfce47116d26a-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/jordan-segall-7b938632/', slug: 'jordan-segall' },
    { name: 'Sai Senthilkumar', title: 'Partner, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/7aeb3f540fe3560fbd9c6bbbdc36f88bae024fb0-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/sai-senthilkumar-5a745095/', slug: 'sai-senthilkumar' },
    { name: 'Enzo Wiener', title: 'Vice President, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/6d71192ade62f5d05e7f821ea1ee68fe675ea431-590x1041.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: undefined, slug: 'enzo-wiener' },
    { name: 'Jimmy Zhou', title: 'Investor, growth', category: 'investors', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/109d44e187751e8c0b46400e9225b84217864e41-590x1041.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/jimmy-z/', slug: 'jimmy-zhou' },
    { name: 'Rashad Assir', title: 'Content, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/fa7f14c6a616069f2c776f205cf3d3b2375dacea-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/rashadassir/', slug: 'rashad-assir' },
    { name: 'Travis Bryant', title: 'Sales Leadership, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/a05d573388b7ca0d3b5be790d538bea77fb3ce10-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/tbryant80/', slug: 'travis-bryant' },
    { name: 'Leah Clapper', title: 'Content, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/016959fbdfb7c1b11f13d7bbabf0d25e5ab7f552-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/leahclapper/', slug: 'leah-clapper' },
    { name: 'Ashley Law', title: 'Director of Events, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/a00c2aa40bdf3ee4a76769fbe7350175f818bc91-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/ashleylawc/', slug: 'ashley-law' },
    { name: 'Josh Machiz', title: 'Partner, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/803bbe7dcca39d84f563363208006b3edec19727-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/joshmachiz/', slug: 'josh-machiz' },
    { name: 'Jackson O’Donnell', title: 'Business Development Associate, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/1cbe0fa468a78f5ba6babb48867902efab448104-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/jod3/', slug: 'jackson-odonnell' },
    { name: 'Andie Paredes', title: 'Talent Network Associate, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/dd91f08f21fa015fcd9530db0d7344a52f3ed294-620x988.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/andie-paredes-a7b007141/', slug: 'andie-paredes' },
    { name: 'Santiago Regan', title: 'Director of Business Development, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/01110daf9c392fdd3f3d2a694b56d6756eaf16ed-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/santiagoregan/', slug: 'santiago-regan' },
    { name: 'Atli Thorkelsson', title: 'VP of Network, founder experience', category: 'founder-experience', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/f5041c026998fc85ef244820de4d3f20282b0251-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/atlit/', slug: 'atli-thorkelsson' },
    { name: 'Jeffrey Cheng', title: 'General Counsel, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/542d266c1897c827e37663ec7c13c2b0850e599d-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: undefined, slug: 'jeffrey-cheng' },
    { name: 'King Lau', title: 'Information Technology, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/bdd76b754a6803c9457d9b0d5e4544293923bf06-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/king-lau-76803666/', slug: 'king-lau' },
    { name: 'Katie Moua', title: 'Sr. Fund Manager, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/514cd6617eeb707fea74322fda0a720f7932d365-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/katie-moua-a3638136/', slug: 'katie-moua' },
    { name: 'Lars Pedersen', title: 'Partner, Chief Financial Officer, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/00681ae5651d9adc101c754b12b646caa3adf554-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: undefined, slug: 'lars-pedersen' },
    { name: 'Michele Phua', title: 'Senior Director, Finance, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/ebdd51775cc14503b2de5def548da938dbcea417-785x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/michelephua/', slug: 'michele-phua' },
    { name: 'Emma Quo', title: 'Staff Accountant, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/3a9fbd6ff47c6c2bcbfa8c66250953e076d8445b-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/emma-quo/', slug: 'emma-quo' },
    { name: 'Carrie Rule', title: 'VP Finance, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/13a0508e18dfc87fe834269015e63819acc422d2-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/carrie-rule-b206934/', slug: 'carrie-rule' },
    { name: 'Yuliya Vinogradsky', title: 'Senior Fund Controller, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/d57591688d41c4f0001af14dde639d02007eccd9-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/yuliya-vinogradsky-39620a17/', slug: 'yuliya-vinogradsky' },
    { name: 'Andy Zhou', title: 'Fund Accountant, operations', category: 'operations', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/68a0af5f74ee0158111d7ad3e85090fa8223c288-790x1388.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/andy-zhou-28650811b/', slug: 'andy-zhou' },
    { name: 'Allen Beasley', title: 'Partner, partner emeritus', category: 'partner emeritus', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/154fcba62aebb7a84f33fe230470e46b7560964e-784x1388.png?auto=format&fit=max&q=100&w=392', linkedinUrl: undefined, slug: 'allen-beasley' },
    { name: 'Jeff Brody', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/f4f8c821c711387d788347c8e1bc6f9cec9ff9b0-590x1041.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/pub/jeff-brody/19/b91/274', slug: 'jeff-brody' },
    { name: 'Tom Dyal', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/b7e19229b456662938f7ccb65e212874770ec57e-784x1354.png?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/pub/tom-dyal/8/91b/741', slug: 'tom-dyal' },
    { name: 'Tim Haley', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/e37844d7abfba6002f00c6e9921ceac910306e0d-3042x4645.jpg?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/pub/timothy-haley/3/235/71', slug: 'tim-haley' },
    { name: 'Brad Jones', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/f7250ef760aabfca8972456e641cf4f869697b58-784x1388.png?auto=format&fit=max&q=100&w=392', linkedinUrl: undefined, slug: 'brad-jones' },
    { name: 'Chris Moore', title: 'Partner, partner emeritus', category: 'partner emeritus', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/285f06917f1c9063c5c3a195c18f72de774a2b73-784x1388.png?auto=format&fit=max&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/in/moorechris', slug: 'chris-moore' },
    { name: 'John Walecka', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/b589443c91a23fa38664b7c447861f9fcf9bb28f-3500x4658.png?auto=format&crop=entropy&fit=crop&h=694&q=100&w=392', linkedinUrl: 'https://www.linkedin.com/in/johnwalecka/', slug: 'john-walecka' },
    { name: 'Geoff Yang', title: 'Co-Founder, partner emeritus', category: 'founders', imageUrl: 'https://cdn.sanity.io/images/22xmfoma/production/1ca8f1d2778f8d1f9e74921ef911d1bb3c08fa4e-784x1388.jpg?auto=format&fit=max&q=100&w=392', linkedinUrl: 'http://www.linkedin.com/pub/geoff-yang/0/10/776', slug: 'geoff-yang' },
];

const filters = ["All", "Investors", "Founder Experience", "Founders + Emeritus", "Operations"];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="relative group overflow-hidden border border-border">
    <Link href={`/our-people/${member.slug}`} className="absolute inset-0 z-10" aria-label={`View profile for ${member.name}`} />
    <Image
      src={member.imageUrl}
      alt={member.name}
      width={392}
      height={694}
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
      <div className="flex justify-between items-end">
        <div>
          <h5 className="text-2xl font-bold">{member.name}</h5>
          <p className="text-base font-normal">{member.title}</p>
        </div>
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-30 text-white hover:opacity-80 transition-opacity"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const TeamGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTeam = useMemo(() => {
    if (activeFilter === "All") {
      return teamData;
    }
    if (activeFilter === "Founders + Emeritus") {
      return teamData.filter(member => member.category === 'founders' || member.category === 'partner emeritus');
    }
    const categoryFilter = activeFilter.toLowerCase().replace(" + ", "-").replace(" ", "-");
    return teamData.filter(member => member.category === categoryFilter);
  }, [activeFilter]);
  
  return (
    <div className="py-16 bg-[#A73232]">
      <div className="container mx-auto px-10">
        <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-8">Team</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-lg">
                <span className="hidden md:inline mr-4">Filters</span>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`font-medium transition-colors hover:text-gray-200 ${
                            activeFilter === filter ? "border-b-2 border-white" : "border-b-2 border-transparent"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;