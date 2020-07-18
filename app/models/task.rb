class Task < ApplicationRecord
  
  belongs_to :project
  
  validates_presence_of :task
  
  
    # def date
    #   self.deadline.strftime("%m月%d日")
    # end
    
    # def time
    #   self.deadline_time.strftime("%H:%M")
    # end
  
end
