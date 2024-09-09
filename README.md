# Radiate

Your one-stop live streaming platform.

## Key Features

- Start streaming by connecting your OBS Studio to our web app
- Live viewers count
- Real-time chat and stream using LiveKit
- Follow your favorite streamer and track your own followers
- Block users from chat for offensive behaviour
- Slow chat mode, followers only chat, enable or disable chat
- Search functionality implemented
- User management through Clerk

## Installation

Clone the project on your machine

```bash
  git clone https://github.com/kraizan/radiate.git
```

Change directory

```bash
cd radiate
```

Install dependencies

```bash
npm install
```

Set up .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL="Your DB URL"

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

Setup Database

```bash
npx prisma generate
npx prisma db push
```

Start app

```bash
npm run dev
```

Setup ngrok

```bash
ngrok http --domain=<your-ngrok-domain-name> 3000
```

##### Open up your OBS Studio, generate your stream keys and start streaming to your audience!
