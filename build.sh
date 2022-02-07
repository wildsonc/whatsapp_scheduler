tsc && vite build
cd /volumes/whatsapp_scheduler
source env/bin/activate
rm /volumes/whatsapp_scheduler/assets/*.js
rm /volumes/whatsapp_scheduler/static/*.js
cp /volumes/whatsapp_scheduler/frontend/dist/assets/* /volumes/whatsapp_scheduler/assets/
cp /volumes/whatsapp_scheduler/frontend/dist/index.html /volumes/whatsapp_scheduler/templates/
django collectstatic --no-input
docker build -t wildsonc/wa_scheduler .