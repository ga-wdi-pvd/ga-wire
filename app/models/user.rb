class User < ApplicationRecord
  has_many :posts, dependant: :destroy
end
