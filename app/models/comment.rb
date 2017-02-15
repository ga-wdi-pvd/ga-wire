class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  acts_as_tree
  extend ActsAsTree::TreeView
end
