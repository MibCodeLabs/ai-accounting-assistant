interface Props {
  role: "user" | "ai";
  text: string;
}


export default function MessageBubble({
  role,
  text
}: Props) {

  return (

    <div
      className={
        role === "user"
          ? "bg-blue-600 text-white p-3 rounded-lg ml-auto w-fit"
          : "bg-slate-200 text-black p-3 rounded-lg w-fit"
      }
    >
      {text}
    </div>

  );

}