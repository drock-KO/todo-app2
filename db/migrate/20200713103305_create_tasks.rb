class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task, null: false, index: true
      t.text   :text, null: false
      t.references :project, null: false, foreign_key: true
      t.timestamps
    end
  end
end
