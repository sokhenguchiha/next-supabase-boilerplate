import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div>
			<Link href="/dashboard">/dashboard</Link>
			<Link href="/profile">/profile</Link>
		</div>
	);
}
