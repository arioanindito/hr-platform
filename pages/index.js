import Head from "next/head";
import Image from "next/image";
import { Reminder } from "../components/Reminder";
import { Feed } from "../components/Feed";
import Script from "next/script";

export default function Home() {
	return (
		<>
			{/* <h1>Hello world!</h1> */}
			{/* <div className="flex w-full items-center justify-between">
				<div>Testing</div>
				<div>Testing</div>
			</div> */}
			<div className="flex items-center justify-center w-full">
				{/* <Reminder /> */}
				<Feed />
			</div>
		</>
	);
}
