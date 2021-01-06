class ChangeColumnToTask < ActiveRecord::Migration[5.2]
  def change
    remove_reference :tasks, :project
    
  end
end
