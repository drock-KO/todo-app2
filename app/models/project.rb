class Project < ApplicationRecord
	validates_presence_of :project
	
	has_many :tasks, dependent: :destroy
end
