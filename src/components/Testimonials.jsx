import React from "react";
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear from our satisfied customers about their experience with
            Modularity Solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">Gede Adi Widiatmika</h4>
                <p className="text-muted-foreground">PT.Andalan Mutu Energi</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
            &quot;Kami bekerja sama dengan Modularity Solution untuk
              pengembangan aplikasi web kami, mereka memberikan hasil dan
              pelayanan terbaik untuk kami.&quot;
            </p>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">Bima Putra</h4>
                <p className="text-muted-foreground">
                  Business Owner, Stuff.Keren
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
            &quot;Team Modularity Solution berhasil membuat credibilitas
              bisnis saya di Internet menjadi lebih baik, berkat hasil eksekusi
              team dalam merancang dan aktif berkonsultasi dengan saya dalam
              solusi landing page bisnis saya.&quot;
            </p>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">Jensen Wilson</h4>
                <p className="text-muted-foreground">Property Developer, Sharma Persada</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
            &quot;Kerja sama dengan Modularity Solution dalam pengelolaan
              website kami membantu kami mengembangkan lini bisnis property
              kami.&quot;
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
