import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function page() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
				<div className="flex items-center gap-2">
					<KeyRound />
					<h1 className="text-2xl font-bold">Next + Supabase</h1>
				</div>

				<p className="text-sm text-gray-300">
					Register/SignIn Today 👇
				</p>
				<div className="flex flex-col gap-5">
					<Button
						className=" w-full flex items-center gap-2 "
						variant="outline"
					>
						<FaGithub /> Github
					</Button>
					<Button
						className=" w-full flex items-center gap-2 "
						variant="outline"
					>
						<FcGoogle /> Google
					</Button>
				</div>
				<div className="glowBox -z-10"></div>
			</div>
		</div>
	);
}
