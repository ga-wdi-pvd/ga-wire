Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, Rails.application.secrets.github_key, Rails.application.secrets.github_secret #, scope: "user:email,user:follow"
  # provider :github, '383adfc3974a7f515f61', 'a8a77a97033efc786dfe3fe779cc773e9b321d5c'
end
