import { google } from "googleapis";

function normalizePrivateKey(raw: string) {
  const key = raw.replace(/^"(.*)"$/, "$1").replace(/\\n/g, "\n").trim();

  // If user provided a full PEM already, use it as-is.
  if (key.includes("-----BEGIN") && key.includes("PRIVATE KEY-----")) return key;

  // Otherwise, attempt to recover from env-safe/base64-only formats.
  // Common case: base64 blob starting with "MII..." without PEM headers.
  const base64Match = key.match(/MII[0-9A-Za-z+/=]+\n?(?:[0-9A-Za-z+/=]+\n?)*/);
  const base64 = (base64Match?.[0] ?? key).replace(/[^0-9A-Za-z+/=]/g, "");

  // Re-wrap into PKCS8 PEM form.
  const wrapped = base64.match(/.{1,64}/g)?.join("\n") ?? base64;
  return `-----BEGIN PRIVATE KEY-----\n${wrapped}\n-----END PRIVATE KEY-----\n`;
}

export async function appendToSheet(data: Record<string, string>) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim();

  if (!clientEmail || !clientEmail.includes("@")) {
    throw new Error(
      "Missing/invalid GOOGLE_SERVICE_ACCOUNT_EMAIL (must be the service account client_email)."
    );
  }
  if (!privateKeyRaw) {
    throw new Error("Missing GOOGLE_PRIVATE_KEY (service account private_key).");
  }
  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID (spreadsheet id from the Google Sheets URL).");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: normalizePrivateKey(privateKeyRaw),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:Q",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.fullName,
          data.businessName,
          data.email,
          data.phone,
          data.currentWebsite,
          data.projectType,
          data.websiteGoal,
          data.targetAudience,
          data.pagesNeeded,
          data.designStyle,
          data.websitesLiked,
          data.hasLogo,
          data.hasContent,
          data.features,
          data.timeline,
          data.budget,
          data.extraDetails,
        ],
      ],
    },
  });
}