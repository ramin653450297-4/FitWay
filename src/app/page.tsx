"use client";
import styles from "./page.module.css"
import { signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={styles.container}>
      {/* Add the cover image */}
      <img src="/images/web.jpg" alt="Fit Way Cover" className={styles.coverImage} />
      
      <h1>Welcome to Fit Way</h1>
      <div className={styles.buttonsContainer}>
        {session ? (
          <>
            <div className={styles.page}>HomePage</div>
            <Button variant="contained" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/signup">
              <Button variant="contained">Signup</Button>
            </Link>
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}