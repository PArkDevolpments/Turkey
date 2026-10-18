# Lira Pocket

A free, installable, offline-capable TRY to GBP shopping calculator for iPhone and other devices.

## Features

- Latest available daily reference rates from [Frankfurter](https://frankfurter.dev/), no API key
- Rate saved locally for offline conversion; manual rate fallback
- Item names, unit prices, quantities, individual conversions, and shopping total
- Shopping list and latest saved exchange rate stored in localStorage (on the device, not synced)
- Service worker caches the application shell for offline launches once installed

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, **main**, **/(root)** and save. Then check the deployed URL: https://parkdevolpments.github.io/Turkey/

On iPhone, open the site in Safari while online; select **Share → Add to Home Screen**. Open it once online before offline use so the app and exchange rate are cached.

Rates are reference data, normally updated daily. Actual payment rates and bank fees may differ. The app does not upload shopping-list data.
