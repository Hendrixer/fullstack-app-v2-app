import Card from "@/components/Card";

export default function HomePageLoader() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Card className="">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </Card>
    </div>
  );
}
