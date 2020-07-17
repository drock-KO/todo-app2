class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project, null: false, index: true
      t.timestamps
    end
  end
end
