import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Badge } from "flowbite-react";


export default function CardBaord({ cardData }) {
  const { description, name, homepage,topics } = cardData;
  return (
    <Card className="max-w-sm">
      <a href="#">
        <h5 className="text-xl font-extrabold tracking-tight  text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-pink-500">
          {name.toUpperCase().replaceAll("-", " ")}
        </h5>
      </a>
      <div className="mb-5 mt-2.5">
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {topics.map((e) => (
            <Badge color="pink">{e}</Badge>
          ))}
        </div>

        <a href={homepage} target="_blank">
          {" "}
          <Button outline gradientDuoTone="pinkToOrange">
            Preview{" "}
          </Button>
        </a>
      </div>
    </Card>
  );
}