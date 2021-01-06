class RemoveDeadlineFromTask < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :date, :datetime
  end
end
