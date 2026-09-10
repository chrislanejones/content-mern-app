# Parking Lot — content-mern-app

## Blocking: MongoDB Atlas connection dead

`MONGO_URI` points at `freecluster0.eltg5zu.mongodb.net`, which has no
DNS SRV record at all (confirmed: SRV resolution works fine in this
WSL2 environment for other domains, so it's the cluster itself, not
the network). Likely the free-tier (M0) cluster was paused/deleted, or
the string is stale.

Next session should:
- Check the Atlas dashboard for this cluster's current state / fresh
  connection string.
- Update `.env` locally (Chris does this directly — Claude does not
  read/write `.env*` per the Hard Rules).
- Add `MONGO_URI` and `JWT_SECRET` as environment variables on the
  Vercel project (`chrislanejones-projects/content-mern-app`) — the
  local `.env` is not synced there automatically.
- Once fixed, run the full register/login/profile-update flow both
  locally and on the live Vercel deployment to confirm end-to-end.

## Once Mongo is fixed

- Re-run the browser E2E pass (register → login → update profile →
  logout) that was blocked all session by the DB being unreachable.
