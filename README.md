rails new context_auth -d postgresql --api
add gem 'devise_token_auth'

bundle

rake db:create

bundle exec rails g devise_token_auth:install User api/auth


in model: user put => extend Devise::Models

rails g migration add_trackable_to_users

replace change in mig. file method with 
def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end

rake db:migrate