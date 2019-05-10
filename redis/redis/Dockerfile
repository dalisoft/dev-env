FROM redis:3-alpine
RUN mkdir -p /var/log/redis/ ; touch /var/log/redis/redis-server.log
RUN chmod 777 -R /var/log/
COPY redis.conf /usr/local/etc/redis/redis.conf
EXPOSE  6379
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]