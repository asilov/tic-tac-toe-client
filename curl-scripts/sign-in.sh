# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

# EMAIL=abc@example.com PASSWORD=b sh curl-scripts/auth/sign-in.sh

# don't use a password you use for any real websites!

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
