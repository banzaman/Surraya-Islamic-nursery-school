"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {
  siteSettings,
  homePage,
  academicsPage,
  admissionsPage,
  donatePage,
  contactPage,
  galleryPhoto,
} from "./sanity/schemas";
import { projectId, dataset, apiVersion } from "./sanity/lib/client";

// ── Custom sidebar structure ────────────────────────────────
const structure = (S: any) =>
  S.list()
    .title("Surraya Content")
    .items([
      // Singleton pages (only one document each)
      S.listItem()
        .title("⚙️  Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      S.divider(),

      S.listItem()
        .title("🏠  Home Page")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),

      S.listItem()
        .title("📚  Academics Page")
        .id("academicsPage")
        .child(S.document().schemaType("academicsPage").documentId("academicsPage")),

      S.listItem()
        .title("🎓  Admissions Page")
        .id("admissionsPage")
        .child(S.document().schemaType("admissionsPage").documentId("admissionsPage")),

      S.listItem()
        .title("❤️  Donate Page")
        .id("donatePage")
        .child(S.document().schemaType("donatePage").documentId("donatePage")),

      S.listItem()
        .title("📞  Contact Page")
        .id("contactPage")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),

      S.divider(),

      // Collection (multiple documents)
      S.documentTypeListItem("galleryPhoto").title("🖼️  Gallery Photos"),
    ]);

export default defineConfig({
  name:     "surraya-studio",
  title:    "Surraya Admin",
  basePath: "/studio",

  projectId,
  dataset,
  apiVersion,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: [
      siteSettings,
      homePage,
      academicsPage,
      admissionsPage,
      donatePage,
      contactPage,
      galleryPhoto,
    ],
  },
});
