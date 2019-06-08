class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  #before_action :authenticate_admin!
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
