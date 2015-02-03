FactoryGirl.define do  factory :flight do
    number "MyString"
origin "MyString"
destination "MyString"
date "2015-02-03"
plane_id 1
  end

  factory :plane do
    sequence(:name) { |n| "JQ7#{n}" }
    rows 20
    columns 6
  end
end
