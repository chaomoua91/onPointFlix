import React from "react";
import "./Filter.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Filter() {

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <>
      <div className="Filter">
        <h1 className="FilterTitle">Browse Flix</h1>
        <Card className="filter-card">
          <CardContent>
            <div className="filter-controls">
              <Select>
                <SelectTrigger style={{ color: "white" }} className="w-[180px]">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem style={{ color: "white" }} value="light">
                    Action
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="dark">
                    Adventure
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Animation
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Biography
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Comedy
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Crime
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Cult Movie
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Disney
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Documentary
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Drama
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Erotic
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Family
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Fantasy
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Film-Noir
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Gangster
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Gay and Lesbian
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    History
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Horror
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Military
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Music
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Musical
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Mystery
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Nature
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Neo-Noir
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Period
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Pixar
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Road Movie
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Romance
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Sci-Fi
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Short
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Spy
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Super Hero
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Thriller
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Visually Stunning
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    War
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="system">
                    Western
                  </SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <p className="rating-numbers">1</p>
              <Slider defaultValue={[33]} max={100} step={1} />
              <p className="rating-numbers">10</p>
              <Select>
                <SelectTrigger style={{ color: "white" }} className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem style={{ color: "white" }} value="light">
                    Test 1
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="light">
                    Test 3
                  </SelectItem>
                  <SelectItem style={{ color: "white" }} value="light">
                    Test 2
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
