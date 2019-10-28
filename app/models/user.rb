class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :occupation, presence: true

  enum occupation: {
    developer: "developer",
    designer: "designer",
    recruiter: "recruiter",
    project_manager: "project/ product manager",
    other: "other"
  }

  def full_name
    "#{first_name} #{last_name}"
  end
end
