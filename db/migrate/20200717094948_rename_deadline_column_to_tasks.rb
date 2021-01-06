class RenameDeadlineColumnToTasks < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :deadline, :date
  end
end
