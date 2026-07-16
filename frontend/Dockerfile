# ============================================================================
# Multi-stage build for the portfolio frontend.
#
# Stage 1 ("build"): installs dependencies and produces the static Vite
#   bundle in /app/dist. Nothing from this stage ships to production except
#   the build output.
# Stage 2: minimal nginx image that serves the static files. nginx.conf
#   provides SPA routing (try_files -> index.html), gzip, long-lived asset
#   caching, and the security headers (CSP, HSTS, COOP, ...).
#
# Built and pushed by .github/workflows/frontend-pipeline.yml, then pulled
# by Azure App Service via webhook.
# ============================================================================

FROM node:20-alpine as build
WORKDIR /app

# copy manifests first so the dependency layer is cached between builds
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
